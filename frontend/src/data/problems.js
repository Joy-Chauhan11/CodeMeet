// LANGUAGE CONFIG

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


// PROBLEMS

export const PROBLEMS = {

  // 1. TWO SUM

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

      java: `
import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [[2, 7, 11, 15], 9],
        },
        expectedOutput: [0, 1],
      },

      {
        input: {
          args: [[3, 2, 4], 6],
        },
        expectedOutput: [1, 2],
      },

      {
        input: {
          args: [[3, 3], 6],
        },
        expectedOutput: [0, 1],
      },
    ],
  },


  // 2. REVERSE STRING

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
      javascript: `
function reverseString(s) {
  // Write your solution here
}
`,

      python: `
def reverseString(s):
    # Write your solution here
    pass
`,

      java: `
import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [["h", "e", "l", "l", "o"]],
        },
        expectedOutput: ["o", "l", "l", "e", "h"],
      },

      {
        input: {
          args: [["H", "a", "n", "n", "a", "h"]],
        },
        expectedOutput: ["h", "a", "n", "n", "a", "H"],
      },

      {
        input: {
          args: [["a", "b", "c"]],
        },
        expectedOutput: ["c", "b", "a"],
      },
    ],
  },


  // 3. VALID PALINDROME

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",

    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",

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
      javascript: `
function isPalindrome(s) {
  // Write your solution here
}
`,

      python: `
def isPalindrome(s):
    # Write your solution here
    pass
`,

      java: `
class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: ["A man, a plan, a canal: Panama"],
        },
        expectedOutput: true,
      },

      {
        input: {
          args: ["race a car"],
        },
        expectedOutput: false,
      },

      {
        input: {
          args: [" "],
        },
        expectedOutput: true,
      },
    ],
  },


  // 4. MAXIMUM SUBARRAY

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
        explanation:
          "The subarray [4,-1,2,1] has the largest sum of 6.",
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
      javascript: `
function maxSubArray(nums) {
  // Write your solution here
}
`,

      python: `
def maxSubArray(nums):
    # Write your solution here
    pass
`,

      java: `
class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        },
        expectedOutput: 6,
      },

      {
        input: {
          args: [[1]],
        },
        expectedOutput: 1,
      },

      {
        input: {
          args: [[5, 4, -1, 7, 8]],
        },
        expectedOutput: 23,
      },

      {
        input: {
          args: [[-5, -2, -8, -1]],
        },
        expectedOutput: -1,
      },
    ],
  },


  // 5. CONTAINS DUPLICATE

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
      javascript: `
function containsDuplicate(nums) {
  // Write your solution here
}
`,

      python: `
def containsDuplicate(nums):
    # Write your solution here
    pass
`,

      java: `
import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [[1, 2, 3, 1]],
        },
        expectedOutput: true,
      },

      {
        input: {
          args: [[1, 2, 3, 4]],
        },
        expectedOutput: false,
      },

      {
        input: {
          args: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
        },
        expectedOutput: true,
      },
    ],
  },


  // 6. BEST TIME TO BUY AND SELL STOCK

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
      javascript: `
function maxProfit(prices) {
  // Write your solution here
}
`,

      python: `
def maxProfit(prices):
    # Write your solution here
    pass
`,

      java: `
class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [[7, 1, 5, 3, 6, 4]],
        },
        expectedOutput: 5,
      },

      {
        input: {
          args: [[7, 6, 4, 3, 1]],
        },
        expectedOutput: 0,
      },

      {
        input: {
          args: [[2, 4, 1, 7]],
        },
        expectedOutput: 6,
      },
    ],
  },


  // 7. FIZZ BUZZ

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
      javascript: `
function fizzBuzz(n) {
  // Write your solution here
}
`,

      python: `
def fizzBuzz(n):
    # Write your solution here
    pass
`,

      java: `
import java.util.*;

class Solution {
    public static List<String> fizzBuzz(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [3],
        },
        expectedOutput: ["1", "2", "Fizz"],
      },

      {
        input: {
          args: [5],
        },
        expectedOutput: [
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz",
        ],
      },

      {
        input: {
          args: [10],
        },
        expectedOutput: [
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz",
          "Fizz",
          "7",
          "8",
          "Fizz",
          "Buzz",
        ],
      },
    ],
  },


  // 8. CLIMBING STAIRS

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
      javascript: `
function climbStairs(n) {
  // Write your solution here
}
`,

      python: `
def climbStairs(n):
    # Write your solution here
    pass
`,

      java: `
class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}
`,
    },

    testCases: [
      {
        input: {
          args: [2],
        },
        expectedOutput: 2,
      },

      {
        input: {
          args: [3],
        },
        expectedOutput: 3,
      },

      {
        input: {
          args: [5],
        },
        expectedOutput: 8,
      },

      {
        input: {
          args: [10],
        },
        expectedOutput: 89,
      },
    ],
  },
  "valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "String • Stack",

  description: {
    text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",

    notes: [
      "An input string is valid if open brackets are closed by the same type of brackets.",
      "Open brackets must be closed in the correct order.",
      "Every close bracket has a corresponding open bracket of the same type.",
    ],
  },

  examples: [
    {
      input: 's = "()"',
      output: "true",
    },
    {
      input: 's = "()[]{}"',
      output: "true",
    },
    {
      input: 's = "(]"',
      output: "false",
    },
  ],

  constraints: [
    "1 ≤ s.length ≤ 10⁴",
    "s consists of parentheses only: '()[]{}'.",
  ],

  functionName: "isValid",

  starterCode: {
    javascript: `
function isValid(s) {
  // Write your solution here
}
`,

    python: `
def isValid(s):
    # Write your solution here
    pass
`,

    java: `
import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}
`,
  },

  testCases: [
    {
      input: {
        args: ["()"],
      },
      expectedOutput: true,
    },

    {
      input: {
        args: ["()[]{}"],
      },
      expectedOutput: true,
    },

    {
      input: {
        args: ["(]"],
      },
      expectedOutput: false,
    },

    {
      input: {
        args: ["([{}])"],
      },
      expectedOutput: true,
    },

    {
      input: {
        args: ["([)]"],
      },
      expectedOutput: false,
    },
  ],
},

"merge-sorted-arrays": {
  id: "merge-sorted-arrays",
  title: "Merge Sorted Arrays",
  difficulty: "Easy",
  category: "Array • Two Pointers",

  description: {
    text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums2 into nums1 so that nums1 becomes one sorted array.",

    notes: [
      "nums1 has enough space to hold all elements from nums1 and nums2.",
      "The first m elements of nums1 contain the actual values.",
      "The last n elements of nums1 are initialized with 0 and should be ignored.",
      "The final merged array must be stored inside nums1.",
    ],
  },

  examples: [
    {
      input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
      output: "[1,2,2,3,5,6]",
    },
    {
      input: "nums1 = [1], m = 1, nums2 = [], n = 0",
      output: "[1]",
    },
    {
      input: "nums1 = [0], m = 0, nums2 = [1], n = 1",
      output: "[1]",
    },
  ],

  constraints: [
    "0 ≤ m, n ≤ 200",
    "1 ≤ m + n ≤ 200",
    "nums1.length == m + n",
    "nums2.length == n",
    "-10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹",
    "nums1 and nums2 are sorted in non-decreasing order.",
  ],

  functionName: "merge",

  starterCode: {
    javascript: `
function merge(nums1, m, nums2, n) {
  // Write your solution here
}
`,

    python: `
def merge(nums1, m, nums2, n):
    # Write your solution here
    pass
`,

    java: `
import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }
}
`,
  },

  testCases: [
    {
      input: {
        args: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
      },
      expectedOutput: [1, 2, 2, 3, 5, 6],
    },

    {
      input: {
        args: [[1], 1, [], 0],
      },
      expectedOutput: [1],
    },

    {
      input: {
        args: [[0], 0, [1], 1],
      },
      expectedOutput: [1],
    },

    {
      input: {
        args: [[2, 0], 1, [1], 1],
      },
      expectedOutput: [1, 2],
    },
  ],
},

"binary-search": {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Array • Binary Search",

  description: {
    text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search for target in nums. If target exists, return its index. Otherwise, return -1.",

    notes: [
      "The array contains distinct integers.",
      "The array is sorted in ascending order.",
      "Return the index of target if it exists.",
      "Return -1 if target does not exist.",
    ],
  },

  examples: [
    {
      input: "nums = [-1,0,3,5,9,12], target = 9",
      output: "4",
    },
    {
      input: "nums = [-1,0,3,5,9,12], target = 2",
      output: "-1",
    },
    {
      input: "nums = [5], target = 5",
      output: "0",
    },
  ],

  constraints: [
    "1 ≤ nums.length ≤ 10⁴",
    "-10⁴ ≤ nums[i], target ≤ 10⁴",
    "All integers in nums are distinct.",
    "nums is sorted in ascending order.",
  ],

  functionName: "search",

  starterCode: {
    javascript: `
function search(nums, target) {
  // Write your solution here
}
`,

    python: `
def search(nums, target):
    # Write your solution here
    pass
`,

    java: `
import java.util.*;

class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}
`,
  },

  testCases: [
    {
      input: {
        args: [[-1, 0, 3, 5, 9, 12], 9],
      },
      expectedOutput: 4,
    },

    {
      input: {
        args: [[-1, 0, 3, 5, 9, 12], 2],
      },
      expectedOutput: -1,
    },

    {
      input: {
        args: [[5], 5],
      },
      expectedOutput: 0,
    },

    {
      input: {
        args: [[1, 3, 5, 7, 9], 1],
      },
      expectedOutput: 0,
    },

    {
      input: {
        args: [[1, 3, 5, 7, 9], 9],
      },
      expectedOutput: 4,
    },
  ],
},


"reverse-linked-list": {
  id: "reverse-linked-list",
  title: "Reverse Linked List",
  difficulty: "Easy",
  category: "Linked List • Recursion",

  description: {
    text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",

    notes: [
      "The linked list is singly linked.",
      "Return the new head of the reversed linked list.",
      "You may solve the problem iteratively or recursively.",
    ],
  },

  examples: [
    {
      input: "head = [1,2,3,4,5]",
      output: "[5,4,3,2,1]",
    },
    {
      input: "head = [1,2]",
      output: "[2,1]",
    },
    {
      input: "head = []",
      output: "[]",
    },
  ],

  constraints: [
    "The number of nodes in the list is in the range [0, 5000].",
    "-5000 ≤ Node.val ≤ 5000",
  ],

  functionName: "reverseList",

  starterCode: {
    javascript: `
function reverseList(head) {
  // Write your solution here
}
`,

    python: `
def reverseList(head):
    # Write your solution here
    pass
`,

    java: `
class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        return null;
    }
}
`,
  },

  testCases: [
    {
      input: {
        args: [[1, 2, 3, 4, 5]],
      },
      expectedOutput: [5, 4, 3, 2, 1],
    },

    {
      input: {
        args: [[1, 2]],
      },
      expectedOutput: [2, 1],
    },

    {
      input: {
        args: [[]],
      },
      expectedOutput: [],
    },

    {
      input: {
        args: [[1]],
      },
      expectedOutput: [1],
    },
  ],
},


"longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",

  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",

    notes: [
      "A substring is a contiguous sequence of characters within the string.",
      "The substring must contain no repeated characters.",
      "Return the length of the longest such substring.",
    ],
  },

  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: 'The answer is "abc", with a length of 3.',
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: 'The answer is "b", with a length of 1.',
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: 'The answer is "wke", with a length of 3.',
    },
  ],

  constraints: [
    "0 ≤ s.length ≤ 5 × 10⁴",
    "s consists of English letters, digits, symbols and spaces.",
  ],

  functionName: "lengthOfLongestSubstring",

  starterCode: {
    javascript: `
function lengthOfLongestSubstring(s) {
  // Write your solution here
}
`,

    python: `
def lengthOfLongestSubstring(s):
    # Write your solution here
    pass
`,

    java: `
import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}
`,
  },

  testCases: [
    {
      input: {
        args: ["abcabcbb"],
      },
      expectedOutput: 3,
    },

    {
      input: {
        args: ["bbbbb"],
      },
      expectedOutput: 1,
    },

    {
      input: {
        args: ["pwwkew"],
      },
      expectedOutput: 3,
    },

    {
      input: {
        args: [""],
      },
      expectedOutput: 0,
    },

    {
      input: {
        args: [" "],
      },
      expectedOutput: 1,
    },

    {
      input: {
        args: ["au"],
      },
      expectedOutput: 2,
    },
  ],
},
};