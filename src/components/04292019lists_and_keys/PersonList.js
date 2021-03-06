import React, {Component} from 'react';
import Person from './Person';

function PersonList() {
	const persons =[
		{
			id: 1,
			name: 'Bruce',
			age: 30
		},
		{
			id: 2,
			name: 'Clark',
			age: 32
		},
		{
			id: 3,
			name: 'Martin',
			age: 40
		}
	]

	{/*the child component can not access the key property */}
	const personList = persons.map(person => (<Person key={person.id} person={person}></Person>))
	return <div>{personList}</div>
}

export default PersonList
