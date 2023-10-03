import TreeNode from "./TreeNode"
//给定一个二叉树 root ，返回其最大深度。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：3


// ************开始************************
// dfs + 递归
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};
// ************结束************************
