const taskSchema = {
    type: "object",
    properties: {
        title: {
            type: "string",
            nullable: false,
            minLength: 1,
            maxLength: 30,
        },
        description: {
            type: "string",
            nullable: true,
            minLength: 1,
            maxLength: 30,
        },
    },
    required: ["title", "description"],
};

export default taskSchema;
