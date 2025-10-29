import React from 'react';
import { Text } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

type Props = {
	name: string | undefined;
};

export default function App({ name = 'Anonymous' }: Props) {
	return (
		<>
			<Gradient name="vice">
				<BigText text="quizzle" />
			</Gradient>
			<Text>
				Hello, <Text color="green">{name}</Text>
			</Text>
		</>
	);
}
