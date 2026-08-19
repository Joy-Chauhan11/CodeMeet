// data.js

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    monacoLang: "javascript",
    icon: "/icons/javascript.png",
  },

  python: {
    name: "Python",
    monacoLang: "python",
    icon: "/icons/python.png",
  },

  java: {
    name: "Java",
    monacoLang: "java",
    icon: "/icons/java.png",
  },
};


// ============================================================
// PROBLEMS
// ============================================================

export const PROBLEMS = {

  // ==========================================================
  // 1. TWO SUM
  // ==========================================================

  "two-sum": {
    id: "two-sum",

    title: "Two Sum",

    difficulty: "Easy",

    category: "Array • Hash Table",

    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",

      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation:
          "Because nums[0] + nums[1] == 9, we return [0,1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],

    functionName: "twoSum",

    starterCode: {

      javascript: `
function twoSum(nums, target) {
  // Write your solution here

}

`,

      python: `

def twoSum(nums, target):
    # Write your solution here
    pass
`,

      java: `import java.util.*;

class Solution {

    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here

        return new int[0];
    }
}`,
    },

   testCases: [
  {
    input: {
      args: [[2, 7, 11, 15], 9]
    },
    expectedOutput: [0, 1]
  },

  {
    input: {
      args: [[3, 2, 4], 6]
    },
    expectedOutput: [1, 2]
  },

  {
    input: {
      args: [[3, 3], 6]
    },
    expectedOutput: [0, 1]
  }
],
  },


  // ==========================================================
  // 2. REVERSE STRING
  // ==========================================================

  "reverse-string": {
    id: "reverse-string",

    title: "Reverse String",

    difficulty: "Easy",

    category: "String • Two Pointers",

    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters.",
      notes: [
        "You must modify the input array in-place.",
        "Do not return a new array.",
      ],
    },

    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],

    constraints: [
      "1 ≤ s.length ≤ 10⁵",
      "s[i] is a printable ASCII character",
    ],

    functionName: "reverseString",

    starterCode: {

      javascript: `const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();

const s = input.split("");

function reverseString(s) {
  // Write your solution here

}

reverseString(s);

console.log(JSON.stringify(s));`,

      python: `import sys

s = list(sys.stdin.read().strip())

def reverseString(s):
    # Write your solution here
    pass

reverseString(s)

print("".join(s))`,

      java: `import java.util.*;

class Solution {

    public static void reverseString(char[] s) {
        // Write your solution here
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        char[] s = input.toCharArray();

        reverseString(s);

        System.out.println(new String(s));
    }
}`,
    },

    testCases: [
      {
        input: "hello",
        expectedOutput: '["o","l","l","e","h"]',
      },
      {
        input: "Hannah",
        expectedOutput: '["h","a","n","n","a","H"]',
      },
      {
        input: "abc",
        expectedOutput: '["c","b","a"]',
      },
    ],
  },


  // ==========================================================
  // 3. VALID PALINDROME
  // ==========================================================

  "valid-palindrome": {
    id: "valid-palindrome",

    title: "Valid Palindrome",

    difficulty: "Easy",

    category: "String • Two Pointers",

    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",

      notes: [
        "Return true if the string is a palindrome.",
        "Otherwise return false.",
      ],
    },

    examples: [
      {
        input: '"A man, a plan, a canal: Panama"',
        output: "true",
      },
      {
        input: '"race a car"',
        output: "false",
      },
      {
        input: '" "',
        output: "true",
      },
    ],

    constraints: [
      "1 ≤ s.length ≤ 2 × 10⁵",
      "s consists only of printable ASCII characters",
    ],

    functionName: "isPalindrome",

    starterCode: {

      javascript: `const fs = require("fs");

const s = fs.readFileSync(0, "utf8").trim();

function isPalindrome(s) {
  // Write your solution here

}

console.log(isPalindrome(s).toString());`,

      python: `import sys

s = sys.stdin.read().strip()

def isPalindrome(s):
    # Write your solution here
    pass

print(str(isPalindrome(s)).lower())`,

      java: `import java.util.*;

class Solution {

    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String s = scanner.nextLine();

        System.out.println(isPalindrome(s));
    }
}`,
    },

    testCases: [
      {
        input: "A man, a plan, a canal: Panama",
        expectedOutput: "true",
      },
      {
        input: "race a car",
        expectedOutput: "false",
      },
      {
        input: " ",
        expectedOutput: "true",
      },
    ],
  },


  // ==========================================================
  // 4. MAXIMUM SUBARRAY
  // ==========================================================

  "maximum-subarray": {
    id: "maximum-subarray",

    title: "Maximum Subarray",

    difficulty: "Medium",

    category: "Array • Dynamic Programming",

    description: {
      text: "Given an integer array nums, find the subarray with the largest sum and return its sum.",

      notes: [
        "A subarray is a contiguous part of an array.",
        "The array contains at least one number.",
      ],
    },

    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum of 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
      },
    ],

    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],

    functionName: "maxSubArray",

    starterCode: {

      javascript: `const fs = require("fs");

const nums = fs.readFileSync(0, "utf8")
  .trim()
  .split(/\\s+/)
  .map(Number);

function maxSubArray(nums) {
  // Write your solution here

}

console.log(maxSubArray(nums).toString());`,

      python: `import sys

nums = list(map(int, sys.stdin.read().split()))

def maxSubArray(nums):
    # Write your solution here
    pass

print(maxSubArray(nums))`,

      java: `import java.util.*;

class Solution {

    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Integer> list = new ArrayList<>();

        while (scanner.hasNextInt()) {
            list.add(scanner.nextInt());
        }

        int[] nums = new int[list.size()];

        for (int i = 0; i < nums.length; i++) {
            nums[i] = list.get(i);
        }

        System.out.println(maxSubArray(nums));
    }
}`,
    },

    testCases: [
      {
        input: "-2 1 -3 4 -1 2 1 -5 4",
        expectedOutput: "6",
      },
      {
        input: "1",
        expectedOutput: "1",
      },
      {
        input: "5 4 -1 7 8",
        expectedOutput: "23",
      },
      {
        input: "-5 -2 -8 -1",
        expectedOutput: "-1",
      },
    ],
  },


  // ==========================================================
  // 5. CONTAINS DUPLICATE
  // ==========================================================

  "contains-duplicate": {
    id: "contains-duplicate",

    title: "Contains Duplicate",

    difficulty: "Easy",

    category: "Array • Hash Table",

    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

      notes: [
        "Return true when a duplicate exists.",
        "Return false when all elements are unique.",
      ],
    },

    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],

    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
    ],

    functionName: "containsDuplicate",

    starterCode: {

      javascript: `const fs = require("fs");

const nums = fs.readFileSync(0, "utf8")
  .trim()
  .split(/\\s+/)
  .map(Number);

function containsDuplicate(nums) {
  // Write your solution here

}

console.log(containsDuplicate(nums).toString());`,

      python: `import sys

nums = list(map(int, sys.stdin.read().split()))

def containsDuplicate(nums):
    # Write your solution here
    pass

print(str(containsDuplicate(nums)).lower())`,

      java: `import java.util.*;

class Solution {

    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Integer> list = new ArrayList<>();

        while (scanner.hasNextInt()) {
            list.add(scanner.nextInt());
        }

        int[] nums = new int[list.size()];

        for (int i = 0; i < nums.length; i++) {
            nums[i] = list.get(i);
        }

        System.out.println(containsDuplicate(nums));
    }
}`,
    },

    testCases: [
      {
        input: "1 2 3 1",
        expectedOutput: "true",
      },
      {
        input: "1 2 3 4",
        expectedOutput: "false",
      },
      {
        input: "1 1 1 3 3 4 3 2 4 2",
        expectedOutput: "true",
      },
    ],
  },


  // ==========================================================
  // 6. BEST TIME TO BUY AND SELL STOCK
  // ==========================================================

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",

    title: "Best Time to Buy and Sell Stock",

    difficulty: "Easy",

    category: "Array • Greedy",

    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Choose a single day to buy one stock and a different day in the future to sell that stock. Return the maximum profit you can achieve.",

      notes: [
        "If you cannot achieve any profit, return 0.",
        "You may only buy once and sell once.",
      ],
    },

    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
      },
    ],

    constraints: [
      "1 ≤ prices.length ≤ 10⁵",
      "0 ≤ prices[i] ≤ 10⁴",
    ],

    functionName: "maxProfit",

    starterCode: {

      javascript: `const fs = require("fs");

const prices = fs.readFileSync(0, "utf8")
  .trim()
  .split(/\\s+/)
  .map(Number);

function maxProfit(prices) {
  // Write your solution here

}

console.log(maxProfit(prices).toString());`,

      python: `import sys

prices = list(map(int, sys.stdin.read().split()))

def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit(prices))`,

      java: `import java.util.*;

class Solution {

    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Integer> list = new ArrayList<>();

        while (scanner.hasNextInt()) {
            list.add(scanner.nextInt());
        }

        int[] prices = new int[list.size()];

        for (int i = 0; i < prices.length; i++) {
            prices[i] = list.get(i);
        }

        System.out.println(maxProfit(prices));
    }
}`,
    },

    testCases: [
      {
        input: "7 1 5 3 6 4",
        expectedOutput: "5",
      },
      {
        input: "7 6 4 3 1",
        expectedOutput: "0",
      },
      {
        input: "2 4 1 7",
        expectedOutput: "6",
      },
    ],
  },


  // ==========================================================
  // 7. FIZZ BUZZ
  // ==========================================================

  "fizz-buzz": {
    id: "fizz-buzz",

    title: "Fizz Buzz",

    difficulty: "Easy",

    category: "Math • String",

    description: {
      text: "Given an integer n, return a string array answer where answer[i] is FizzBuzz for i + 1.",

      notes: [
        "If the number is divisible by 3, output Fizz.",
        "If divisible by 5, output Buzz.",
        "If divisible by both, output FizzBuzz.",
        "Otherwise output the number.",
      ],
    },

    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]',
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]',
      },
    ],

    constraints: [
      "1 ≤ n ≤ 10⁴",
    ],

    functionName: "fizzBuzz",

    starterCode: {

      javascript: `const fs = require("fs");

const n = Number(fs.readFileSync(0, "utf8").trim());

function fizzBuzz(n) {
  // Write your solution here

}

console.log(JSON.stringify(fizzBuzz(n)));`,

      python: `import sys

n = int(sys.stdin.read().strip())

def fizzBuzz(n):
    # Write your solution here
    pass

print(fizzBuzz(n))`,

      java: `import java.util.*;

class Solution {

    public static List<String> fizzBuzz(int n) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        List<String> result = fizzBuzz(n);

        System.out.println(result);
    }
}`,
    },

    testCases: [
      {
        input: "3",
        expectedOutput: '["1","2","Fizz"]',
      },
      {
        input: "5",
        expectedOutput: '["1","2","Fizz","4","Buzz"]',
      },
      {
        input: "10",
        expectedOutput:
          '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"]',
      },
    ],
  },


  // ==========================================================
  // 8. CLIMBING STAIRS
  // ==========================================================

  "climbing-stairs": {
    id: "climbing-stairs",

    title: "Climbing Stairs",

    difficulty: "Easy",

    category: "Dynamic Programming",

    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return the number of distinct ways you can climb to the top.",

      notes: [
        "You can reach the top using combinations of 1-step and 2-step moves.",
      ],
    },

    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways: 1+1 and 2.",
      },
      {
        input: "n = 3",
        output: "3",
      },
    ],

    constraints: [
      "1 ≤ n ≤ 45",
    ],

    functionName: "climbStairs",

    starterCode: {

      javascript: `const fs = require("fs");

const n = Number(fs.readFileSync(0, "utf8").trim());

function climbStairs(n) {
  // Write your solution here

}

console.log(climbStairs(n).toString());`,

      python: `import sys

n = int(sys.stdin.read().strip())

def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(n))`,

      java: `import java.util.*;

class Solution {

    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        System.out.println(climbStairs(n));
    }
}`,
    },

    testCases: [
      {
        input: "2",
        expectedOutput: "2",
      },
      {
        input: "3",
        expectedOutput: "3",
      },
      {
        input: "5",
        expectedOutput: "8",
      },
      {
        input: "10",
        expectedOutput: "89",
      },
    ],
  },
};