import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';
import Pass from './pass';
import Fail from './fail';

function QuizArea(props) {
    
    if (props.pass) {
        return <Pass/>
    }
    if (props.fail) {
        return <Fail/>
    }
    
    // if (props.isFinished) {
    //     return <UserGreeting/>
    // }

    return (
        <div>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea
