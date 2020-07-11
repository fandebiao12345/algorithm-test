/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-06-12 11:05:03
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-06-12 11:15:44
 */ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {
    return recusive(root);
};
var recusive = function(root) {
    if(root == null || (root.left == null && root.right == null) ) return true;
    if(Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
    return recusive(root.left) && recusive(root.right);
}

var getDepth = function(root) {
    if(root == null) return 0;
    return Math.max(getDepth(root.left),getDepth(root.right)) + 1;
}

