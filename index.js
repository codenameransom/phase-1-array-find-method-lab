function superbowlWin(record){
    const match = record.find((obj) => obj.result === "W")
    if (match == undefined) {
        return undefined
    }
    else {
        return match.year
    }
}