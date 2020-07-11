/*
 * @Description: file content
 * @Author: 卢大鹏
 * @Date: 2020-06-12 11:16:35
 * @LastEditors: 卢大鹏
 * @LastEditTime: 2020-06-12 11:16:41
 */ 
var getDepth = function(root) {
    if(root == null) return 0;
    return Math.max(getDepth(root.left),getDepth(root.right)) + 1;
}