export const schema = {
    $id: 'Shape',
    type: 'object',
    properties: {
        _id: { type: 'string' },
        size: { type: 'string' },
        color: { $ref: 'Color' },
    },
}
