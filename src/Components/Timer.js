import React from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import { changeMinValueAction, changeSecValueAction, changeMsecValueAction, resetTimer, startTimer, stopTimer } from '../state/timer';

const style = {
    paper: {
        margin: 30,
        padding: 30,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width: '40px',
    },
    buttons: {
        margin: 10
    }
}

class Timer extends React.Component {
    render() {
        return (
            <Paper
                style={style.paper}>
                <h2
                    style={{ fontSize: '400%', color: '#00BCD4' }}
                >
                    Timer
                </h2>
                <div>
                    <Input
                        style={style.input}
                        floatingLabelText='Min.'
                        value={this.props.min}
                        type='number'
                        onChange={this.props.valueMin}
                    />
                    {`:`}
                    <Input
                        style={style.input}
                        floatingLabelText='Sec.'
                        value={this.props.sec}
                        type='number'
                        onChange={this.props.valueSec}
                    />
                    {`:`}
                    <Input
                        style={style.input}
                        floatingLabelText='MSec.'
                        value={this.props.msec}
                        type='number'
                        onChange={this.props.valueMsec}

                    />
                </div>
                <div>
                    <Button
                        style={style.buttons}
                        label='Start'
                        onClick={this.props.start}
                    />
                    <Button
                        style={style.buttons}
                        label='Stop'
                        onClick={this.props.stop}
                    />
                    <Button
                        style={style.buttons}
                        label='Reset'
                        onClick={this.props.reset}
                    />
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    min: state.timer.min,
    sec: state.timer.sec,
    msec: state.timer.msec
})

const mapDispatchToProps = dispatch => ({
    start: () => dispatch(startTimer()),
    stop: () => dispatch(stopTimer()),
    reset: () => dispatch(resetTimer()),
    valueMin: (event) => dispatch(changeMinValueAction(event.target.value)),
    valueSec: (event) => dispatch(changeSecValueAction(event.target.value)),
    valueMsec: (event) => dispatch(changeMsecValueAction(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)