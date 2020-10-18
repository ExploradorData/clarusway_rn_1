import React, { useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView, FlatList } from 'react-native';

import { main } from './styles';
import { TodoInput, TodoCard } from './components';

const Main = () => {
    const [list, setList] = useState([])

    function addTodo(text) {
        const element = {
            id: list.length,
            todo: text,
            isDone: false
        }
        const newArray = [element, ...list]
        setList(newArray);
    }

    const renderTodo = ({ item }) => <TodoCard data={item} />

    return (
        <SafeAreaView style={main.container}>
            <KeyboardAvoidingView style={main.container} behavior="padding">

                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text style={main.todoCount}>{list.length}</Text>
                </View>

                <FlatList
                    data={list}
                    renderItem={renderTodo}
                />

                <TodoInput
                    onTodoEnter={todoText => addTodo(todoText)}
                />

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Main;