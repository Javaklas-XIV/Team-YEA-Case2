export enum UserRoles{
  Client = "Client",
  Medewerker = "Medewerker"
}
export function mapStringToUserRole(role: UserRoles): UserRoles {
  switch (role.toString()) {
    case 'Client':
      return UserRoles.Client;
    case 'Medewerker':
      return UserRoles.Medewerker;
    default:
      throw new Error(`Unknown role: ${role}`);
  }
}
