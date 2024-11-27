function distanceFromHqInBlocks(clientBlock){
    const hqBlock = 42;
    // return Math.abs(clientBlock - hqBlock);
    if(clientBlock > hqBlock){
        return clientBlock - hqBlock;
    }else{
        return hqBlock - clientBlock;
    }
}

function distanceFromHqInFeet (clientBlock){
    const distanceInBlocks = distanceFromHqInBlocks(clientBlock);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
}

function distanceTravelledInFeet (start,destination) {
    if (start < destination) {
    return (destination - start) * 264;
    }else {
    return (start - destination) * 264;
    }
}   
function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';

}
}
