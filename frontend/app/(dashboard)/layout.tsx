"use client"
import { AuthProvider, AuthContext } from "../../contexts/AuthContext";
import { SidebarItem } from "../../components/SidebarItem";
import { TaskProvider } from "../../contexts/TaskContext";
import { useContext } from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const {user, logout} = useContext(AuthContext);

  return (
    <AuthProvider>
      <TaskProvider>
        <div className="flex">
          <div className="w-72 min-w-72 border-r border-slate-300 min-h-screen mr-2 ">
            
            <div>
              <h1 className="text-3xl font-bold mb-4 p-4">{user?.fullName}</h1>
              <SidebarItem href={"/home"} icon={<HomeIcon />} title="Home" />
              <SidebarItem
                href={"/boards"}
                icon={<TransferIcon />}
                title="Boards"
              />
              <SidebarItem
                href={"/Settings"}
                icon={<TransactionsIcon />}
                title="Settings"
              />
              <SidebarItem
                href={"/Teams"}
                icon={<P2PTransferIcon />}
                title="Teams"
              />
              <SidebarItem
                href={"/Analytics"}
                icon={<P2PTransferIcon />}
                title="Analytics"
              />
              <div className={`flex text-slate-500 cursor-pointer pl-8 mt-24`}>
                <button
                    className={`font-bold text-slate-500`}
                    onClick={() => {
                      logout();
                    }}
                  >
                  Logout
                </button>
              </div>
                
            </div>
          </div>
          {children}
        </div>
      </TaskProvider>
    </AuthProvider>
  );
}

// Icons Fetched from https://heroicons.com/
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}
function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function P2PTransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
