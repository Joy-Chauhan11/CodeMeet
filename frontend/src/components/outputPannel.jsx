export default function OutputPanel() {
  return (
    <div className="h-full bg-base-100 overflow-y-auto border-t border-base-300 flex flex-col">

      {/* Tabs */}
      <div className="tabs tabs-boxed rounded-none border-b border-base-300 px-2">
        <a className="tab tab-active">Test Cases</a>
        <a className="tab">Output</a>
        <a className="tab">Console</a>
        <a className="tab">AI Review</a>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-auto">
        Select a tab...
      </div>

    </div>
  );
}