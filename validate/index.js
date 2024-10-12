// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, minValue = null, maxValue = null) {
    if (!node) {
        return true; 
    }

    if ((minValue !== null && node.data <= minValue) || (maxValue !== null && node.data >= maxValue)) {
        return false; 
    }

    return (
        validate(node.left, minValue, node.data) && 
        validate(node.right, node.data, maxValue)   
    );
}

module.exports = validate;

