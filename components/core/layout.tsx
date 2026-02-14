import AddMcpServerButton from "./add_mcp_server_button";
import Header from "./header";

export interface ILayoutProps {
  children: React.ReactElement;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div style={{backgroundColor: 'rgba(200, 200, 200, 0.47)'}}>
      <Header />
      <AddMcpServerButton />
      {props.children}
    </div>
  );
}
