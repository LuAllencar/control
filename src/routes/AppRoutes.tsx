import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";

export default function AppRoutes() {
    const isAuthenticated = false; 
    // se for false, pede o login, se for true libera as partes de rotas da home
    return isAuthenticated ? <DrawerRoutes /> : <AuthRoutes />;
}