// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Example } from '../components/Example'

export class Home extends React.Component<{}, {}> {
    public render (): JSX.Element | null {
        return <div>
            <Example/>
            <h2>Main Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima illum laudantium sequi beatae eaque temporibus tempore ea velit doloremque sint dolores quaerat delectus, nesciunt quasi vel mollitia accusamus eius obcaecati?</p>
        </div>
    }
}
