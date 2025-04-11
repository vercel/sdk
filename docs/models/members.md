# Members

## Example Usage

```typescript
import { Members } from "@vercel/sdk/models/listaccessgroupmembersop.js";

let value: Members = {
  email: "Felicity63@yahoo.com",
  uid: "<id>",
  username: "Brianne81",
  teamRole: "BILLING",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `avatar`                                 | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `email`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `uid`                                    | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `username`                               | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `createdAt`                              | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `teamRole`                               | [models.TeamRole](../models/teamrole.md) | :heavy_check_mark:                       | N/A                                      |