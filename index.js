// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}
mondayWork()

const wrapAdjective = function (adjective = "*") {

    return function (meaning = "special") {
        return `You are ${adjective}${meaning}${adjective}!`
    }
}
wrapAdjective("||")("a dedicated programmer")

