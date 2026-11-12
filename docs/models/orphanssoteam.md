# OrphanSsoTeam

Orphans only: the team whose Directory Sync invite SSO sign-in redeems for a managed account once Update Account is complete.

## Example Usage

```typescript
import { OrphanSsoTeam } from "@vercel/sdk/models/authuser.js";

let value: OrphanSsoTeam = {
  avatar: "https://loremflickr.com/3602/2648?lock=2883236204605280",
  name: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `avatar`           | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |