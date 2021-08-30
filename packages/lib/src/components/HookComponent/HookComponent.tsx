import * as React from 'react';

export interface HookComponentProps {
	children?: React.ReactNode;
}

export function HookComponent({ children }: HookComponentProps) {
	
	// future hook
	React.useEffect(() => {
		console.log('use effect!');
	}, []);
	
	if (children !== undefined) {
		return (<div>{children}</div>);
	}

	return (<p>test</p>);
}