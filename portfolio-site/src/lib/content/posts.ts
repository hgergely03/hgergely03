export type Post = {
    slug: string;
    title: string;
    motto: string;
    summaryTitle: string;
    summary: string;
    coverImageUrl: string;
    content: Paragraph[];
    stack: StackItem[];
}

// TODO: add localisation support
// TODO: If ever making a blog, could use a headless CMS like https://prismic.io/dashboard/

type Paragraph = {
    title: string;
    text: string;
    imageUrl: string;
}

type StackItem = {
    title: string;
    imageUrl: string;
}

export let posts = [
    {
        slug: "hello-world",
        title: "The first post",
        motto: "This is the first post",
        summaryTitle: "Summary of the first post",
        summary: "This is the summary of the first post",
        coverImageUrl: "https://picsum.photos/id/1/700/500",
        content: [
            {
                title: "First paragraph",
                text: "This is the first paragraph of the first post",
                imageUrl: "https://picsum.photos/500/220"
            },
            {
                title: "Second paragraph",
                text: "This is the second paragraph of the first post",
                imageUrl: "https://picsum.photos/500/220"
            },
        ],
        stack: [
            {
                title: "First stack item",
                imageUrl: "https://picsum.photos/200/200"
            },
            {
                title: "Second stack item",
                imageUrl: "https://picsum.photos/200/200"
            },
            {
                title: "Third stack item",
                imageUrl: "https://picsum.photos/200/200"
            },
        ]
    },
    {
        slug: "hello-world-2",
        title: "The second post",
        motto: "This is the second post",
        summaryTitle: "Summary of the second post",
        summary: "This is the summary of the second post",
        coverImageUrl: "https://picsum.photos/id/2/700/500",
        content: [
            {
                title: "First paragraph",
                text: "This is the first paragraph of the second post",
                imageUrl: "https://picsum.photos/200/300"
            },
            {
                title: "Second paragraph",
                text: "This is the second paragraph of the second post",
                imageUrl: "https://picsum.photos/200/200"
            },
        ],
        stack: [
            {
                title: "First stack item",
                imageUrl: "https://picsum.photos/200/200"
            },
        ]
    },
    {
        slug: "hello-world-3",
        title: "The third post",
        motto: "This is the third post",
        summaryTitle: "Summary of the third post",
        summary: "This is the summary of the third post",
        coverImageUrl: "https://picsum.photos/700/500",
        content: [
            {
                title: "First paragraph",
                text: "This is the first paragraph of the third post",
                imageUrl: "https://picsum.photos/200/300"
            },
            {
                title: "Second paragraph",
                text: "This is the second paragraph of the third post",
                imageUrl: "https://picsum.photos/200/200"
            },
        ],
        stack: [
            {
                title: "First stack item",
                imageUrl: "https://picsum.photos/200/200"
            },
        ]
    },
];