export const showVote = (x: number): string => {
	if(x < 9999) {
		return `${x}`;
	}
	else if(x < 1000000) {
		return `${Math.round(x/1000)}K`;
	}
	else if(x < 1000000000) {
		return `${Math.round(x/1000000)}M`;
	}
	else if(x < 1000000000000) {
		return `${Math.round(x/1000000000)}B`;
	}
    else {
    	return "1T+";
    }
}