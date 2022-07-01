// <<<<<<<<<<<<<<Categories
export const CAT_ID = {
    default : "default",
    home : "home",
    univer : "univer",
    work : "work"
};

export const CATEGORY = [
    {
        id : CAT_ID.default,
        text : "Choose category for task"
    },
    {
        id : CAT_ID.home, 
        text : "Home Tasks"
    },
    {
        id : CAT_ID.univer, 
        text : "University tasks"
    },
    {
        id : CAT_ID.work, 
        text : "Work tasks"
    },
];// Categories>>>>>>>>>>>>>>>




// <<<<<<<<<<<<<<Task Status
export const STATUS = {
        do : "do",
        done : "done"
};

export const TASK_STATUS =[
    {
        id : STATUS.do,
        text : "do"
    },
    {
        id : STATUS.done, 
        text : "done"
    }
]// Task Status>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<Themes
export const THEMES = {
    light:{
        background : "bg-light",
        cardBackground:"bg-white",
        textColor : "text-dark",
        border: "border-light",
        btnColor:"btn-light"
    },

    dark:{
        background : "bg-dark",
        cardBackground:"bg-secondary",
        textColor :  "text-white",
        border: "border-dark",
        btnColor:"btn-dark"
    }
}// Themes>>>>>>>>>>>>>>