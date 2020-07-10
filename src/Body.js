import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class Body extends React.Component{

    todoRef = React.createRef();

    _handleNewTodo = (e) =>{
        let newTodo = this.todoRef.current.value;
        this.props.addNewTodo(newTodo);
        
        e.preventDefault();
        this.todoRef.current.value = '';
    };

    render(){
        const { todos } = this.props;
        return (
            <div>
                <div>Daftar Kegiatan</div>
                <form onSubmit={this._handleNewTodo}>
                    <table>
                        <tr>
                            <td>
                                <label>Kegiatan <input ref={this.todoRef} /></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Input</button>
                            </td>
                        </tr>
                    </table>
                </form>
                <table>
                    {todos.map((item, index) => <ul><li key={index}>{item}</li></ul>)}
                </table>
            </div>
        );
    }
    }

    const mapStateToProps = state => ({
        todos: state.todos
    })

    const mapDispatchToProps = dispatch => ({
        addNewTodo: todo => dispatch({type: 'ADD TODO', todo
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Body);