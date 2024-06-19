export enum UserRoles{
  Client,
  Admin
}
export function mapStringToUserRole(role: UserRoles): UserRoles {
  switch (role.toString()) {
    case 'Client':
      return UserRoles.Client;
    case 'Admin':
      return UserRoles.Admin;
    default:
      throw new Error(`Unknown role: ${role}`);
  }
}
