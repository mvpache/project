https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html


{
    reviews : {
        byId : {
            "review1" : {
                id : "review1",
                author : "user2",
                review : ".....",
                grade : "...",

            },
            "review2" : {
                id : "review2",
                author : "user3",
                review : ".....",
                grade : "...",
            },
            "review3" : {
                id : "review3",
                author : "user3",
                review : ".....",
                grade : "...",
            },
            "review4" : {
                id : "review4",
                author : "user1",
                review : ".....",
                grade : "...",
            },
            "review5" : {
                id : "review5",
                author : "user3",
                review : ".....",
                grade : "...",
            },
        },
        allIds : ["review1", "review2", "review3", "review4", "review5"]
    },
    users : {
        byId : {
            "user1" : {
                username : "user1",
                name : "User 1",
            }
            "user2" : {
                username : "user2",
                name : "User 2",
            }
            "user3" : {
                username : "user3",
                name : "User 3",
            }
        },
        allIds : ["user1", "user2", "user3"]
    }
}