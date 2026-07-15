export const PROBLEMS = {
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
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
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
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
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
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "binary-search": {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Binary Search • Array",
  description: {
    text: "Given a sorted array of integers nums and an integer target, return the index of target if it exists. Otherwise, return -1.",
    notes: [
      "The array is sorted in ascending order.",
      "Your solution should run in O(log n) time complexity.",
    ],
  },
  examples: [
    {
      input: "nums = [-1,0,3,5,9,12], target = 9",
      output: "4",
      explanation: "9 exists in nums and its index is 4.",
    },
    {
      input: "nums = [-1,0,3,5,9,12], target = 2",
      output: "-1",
      explanation: "2 does not exist in nums.",
    },
    {
      input: "nums = [1], target = 1",
      output: "0",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁴",
    "-10⁴ ≤ nums[i], target ≤ 10⁴",
    "All integers in nums are unique.",
    "nums is sorted in ascending order.",
  ],
  starterCode: {
    javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1
console.log(search([1], 1)); // Expected: 0`,
    python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1
print(search([1], 1))              # Expected: 0`,
    java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here

        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
        System.out.println(search(new int[]{1}, 1)); // Expected: 0
    }
}`,
  },
  expectedOutput: {
    javascript: "4\n-1\n0",
    python: "4\n-1\n0",
    java: "4\n-1\n0",
  },
},

"valid-anagram": {
  id: "valid-anagram",
  title: "Valid Anagram",
  difficulty: "Easy",
  category: "Hash Table • String",
  description: {
    text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    notes: [
      "An anagram is a word formed by rearranging the letters of another word.",
      "Both strings consist of lowercase English letters.",
    ],
  },
  examples: [
    {
      input: 's = "anagram", t = "nagaram"',
      output: "true",
      explanation: "Both strings contain the same characters with the same frequency.",
    },
    {
      input: 's = "rat", t = "car"',
      output: "false",
      explanation: "The characters are different.",
    },
    {
      input: 's = "listen", t = "silent"',
      output: "true",
    },
  ],
  constraints: [
    "1 ≤ s.length, t.length ≤ 5 × 10⁴",
    "s and t consist of lowercase English letters.",
  ],
  starterCode: {
    javascript: `function isAnagram(s, t) {
  // Write your solution here

}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("listen", "silent")); // Expected: true`,
    python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False
print(isAnagram("listen", "silent"))    # Expected: True`,
    java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
        System.out.println(isAnagram("listen", "silent")); // Expected: true
    }
}`,
  },
  expectedOutput: {
    javascript: "true\nfalse\ntrue",
    python: "True\nFalse\nTrue",
    java: "true\nfalse\ntrue",
  },
},

"best-time-to-buy-and-sell-stock": {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Hard",
  category: "Array • Dynamic Programming",
  description: {
    text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.",
    notes: [
      "You must buy before you sell.",
      "If you cannot achieve any profit, return 0.",
    ],
  },
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 5.",
    },
    {
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation: "No profitable transaction can be made.",
    },
    {
      input: "prices = [2,4,1]",
      output: "2",
      explanation: "Buy at 2 and sell at 4.",
    },
  ],
  constraints: [
    "1 ≤ prices.length ≤ 10⁵",
    "0 ≤ prices[i] ≤ 10⁴",
  ],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([2,4,1])); // Expected: 2`,
    python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0
print(maxProfit([2,4,1]))        # Expected: 2`,
    java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
        System.out.println(maxProfit(new int[]{2,4,1})); // Expected: 2
    }
}`,
  },
  expectedOutput: {
    javascript: "5\n0\n2",
    python: "5\n0\n2",
    java: "5\n0\n2",
  },
},
"merge-two-sorted-lists": {
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked List • Recursion",
  description: {
    text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted linked list and return its head.",
    notes: [
      "The new list should be made by splicing together the nodes of the first two lists.",
      "Both input linked lists are sorted in non-decreasing order.",
    ],
  },
  examples: [
    {
      input: "list1 = [1,2,4], list2 = [1,3,4]",
      output: "[1,1,2,3,4,4]",
      explanation: "Merge both sorted lists into a single sorted list.",
    },
    {
      input: "list1 = [], list2 = []",
      output: "[]",
    },
    {
      input: "list1 = [], list2 = [0]",
      output: "[0]",
    },
  ],
  constraints: [
    "The number of nodes in both lists is in the range [0, 50].",
    "-100 ≤ Node.val ≤ 100",
    "Both lists are sorted in non-decreasing order.",
  ],
  starterCode: {
    javascript: `function mergeTwoLists(list1, list2) {
  // Write your solution here

}

// Test cases
console.log(mergeTwoLists([1,2,4], [1,3,4])); // Expected: [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // Expected: []
console.log(mergeTwoLists([], [0])); // Expected: [0]`,
    python: `def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Test cases
print(mergeTwoLists([1,2,4], [1,3,4]))  # Expected: [1,1,2,3,4,4]
print(mergeTwoLists([], []))            # Expected: []
print(mergeTwoLists([], [0]))           # Expected: [0]`,
    java: `import java.util.*;

class Solution {
    public static int[] mergeTwoLists(int[] list1, int[] list2) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            mergeTwoLists(new int[]{1,2,4}, new int[]{1,3,4})
        )); // Expected: [1,1,2,3,4,4]

        System.out.println(Arrays.toString(
            mergeTwoLists(new int[]{}, new int[]{})
        )); // Expected: []

        System.out.println(Arrays.toString(
            mergeTwoLists(new int[]{}, new int[]{0})
        )); // Expected: [0]
    }
}`,
  },
  expectedOutput: {
    javascript: "[1,1,2,3,4,4]\n[]\n[0]",
    python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
    java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
  },
},

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },

  


};