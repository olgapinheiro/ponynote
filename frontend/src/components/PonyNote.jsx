import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {notes} from "../actions";

class PonyNote extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to PonyNote!</h2>
                <hr />

                <h3>Notes</h3>
                <table>
                    <tbody>
                        {this.props.notes.map(note => (
                            <tr>
                                <td>{note.text}</td>
                                <td><button>edit</button></td>
                                <td><button>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>
                    <Link to="/contact">Click Here</Link> to contact us!
    </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: (text) => {
            dispatch(notes.addNote(text));
        },
        updateNote: (id, text) => {
            dispatch(notes.addNote(id, text));
        },
        deleteNote: (id) => {
            dispatch(notes.deleteNote(id));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PonyNote);