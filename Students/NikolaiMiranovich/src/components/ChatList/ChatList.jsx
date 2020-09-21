
        import './style.css';
        import React, { Component, Fragment } from 'react';
        
        import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
        import List from '@material-ui/core/List';
        import ListItemText from '@material-ui/core/ListItemText';

        export default class ChatList extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    //
                }
            }
        
            render() {
                // let { some } = this.state;
        
                return (
                    
                    <div>
                            <List>
                                <ListItemText primaryText="Chat 1"/>
                                <ListItemText primaryText="Chat 2"/>
                                <ListItemText primaryText="Chat 3"/>
                            </List>

                        
                            <ChatsDialog />
                        </div>
                )
            }
        }
    