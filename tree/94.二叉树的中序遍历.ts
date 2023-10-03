// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number,left?:TreeNode|null,right?:TreeNode|null){
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
// ************开始************
// 递归解决问题
function inorderTraversal(root: TreeNode | null): number[] {
    const res:number[] = []
    const preorder = (root:TreeNode|null)=>{
        if(!root) return
        preorder(root.left)
        res.push(root.val)
        preorder(root.right)
    }
    preorder(root)
    return res
};
// *************结束************
const child = new TreeNode(3)
const son = new TreeNode(2,child)
const root = new TreeNode(1,null,son)
const result = inorderTraversal(root)
console.log(result); // [1,3,2]

