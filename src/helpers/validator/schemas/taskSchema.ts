const taskSchema = {
    type: "object",
    properties: {
        title: {
            type: "string",
            nullable: false,
        },
        description: {
            type: "string",
            nullable: true,
        },
    },
    required: ["title", "description"],
};

export default taskSchema;
