import { DateTime, Duration } from "luxon"

export const timePassed = (time: DateTime): string => {
    const dur: Duration = Duration.fromMillis(DateTime.now().toMillis() - time.toMillis())
    
    console.log(dur.as('minutes'))

    if (dur.as('minutes') < 1) {
        return `${Math.floor(dur.as('seconds'))} seconds ago`
    }
    else if (dur.as('hours') < 1) {
        return `${Math.floor(dur.as('minutes'))} minutes ago`
    }
    else if (dur.as('days') < 1) {
        return `${Math.floor(dur.as('hours'))} hours ago`
    }
    else if (dur.as('months') < 1) {
        return `${Math.floor(dur.as('days'))} days ago`
    }
    else if (dur.as('years') < 1) {
        return `${Math.floor(dur.as('months'))} months ago`
    }
    else {
        return `${Math.floor(dur.as('years'))} years ago`
    }
}