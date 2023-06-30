import { Layout } from "antd"
import { Header } from "../Header/Header.js"

export const Wrapper  = (props) => {
	const {children} = props
	return (
		<Layout>
			<Layout.Header>
				<Header/>
			</Layout.Header>
			<Layout.Content>{children}</Layout.Content>
		</Layout>
	)
}