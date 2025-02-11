interface FlashMessages {
    success?: string;
    error?: string;
    status?: string;
}
interface AuthUser {
    id: number;
    name: string;
    email: string;
    created_at:string;
    email_verified_at:string;
    role:string;
    updated_at:string;
}
interface Auth {
    user?: AuthUser; 
}
interface ErrorsMessage{
    errors:any;
}

interface Ziggy {
location: string;
// Ajoute d'autres propriétés de Ziggy si nécessaire
}
interface PageProps {
  auth: Auth;
  ziggy: Ziggy;
  flash: FlashMessages;
  errors:ErrorsMessage;
}
export default PageProps;