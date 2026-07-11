import Session from "../models/session.js";

export async function createSession(req,res){
    try{
         const {problem , difficulty}=req.body;
    const user = req.user._id;
    // const clerkId = req.user.clerkId ;
  if(!problem|| !difficulty){
return  res.status(400).json("Problem and Difficulty are required");
  }
   const roomId= Date.now().toString(36) +
    Math.random().toString(36).slice(2, 8);
   
    const session = await Session.create({
        problem,
        difficulty,
         host:user,
        roomId  })
     
        res.status(201).json({ session });
    }
    catch(error){

        console.log("Error in createSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
    }

    
}

export async function getSession(req,res){
     try{
     const session = await Session.find({status:"active"})
     .populate("host" ,  "name profileImage email clerkId" )
     .sort({createdAt :-1})
     .limit(20)

     res.status(200).json({session});

     }catch{
console.log("Error in getSession controller:", error.message);

    res.status(500).json({
        message:"Internal Server Error"
    });

     }
}

export async function getMyRecentSessions(req,res){
     try{
        const userId = req.user._id;
        const recentSessions = await Session.find(
        {status:"completed",
      $or: [{ host: userId }, { participant: userId }],
         })
         .sort({createdAt : -1})
         .limit(20)

         res.status(200).json({recentSessions});
     }
          catch(error){
            console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
         }
}
export async function getSessionById(req,res){
      try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function joinSession(req,res){
  try {
    const { id } = req.params;
    const userId = req.user._id;
    // const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res.status(400).json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join their own session as participant" });
    }

    // check if session is already full - has a participant
    if (session.participant) return res.status(409).json({ message: "Session is full" });

    session.participant = userId;
    await session.save();
        res.status(200).json({ session });}

    catch(error){
 console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
    }   
}
export async function endSession(req,res){
     try{
const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // check if user is the host
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    // check if session is already completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }
 session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
     }catch(error){
 console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
     }
}