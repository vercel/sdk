# GetTeamMembersResponseBody

## Example Usage

```typescript
import { GetTeamMembersResponseBody } from "@vercel/sdk/models/getteammembersop.js";

let value: GetTeamMembersResponseBody = {
  members: [],
  pagination: {
    hasNext: false,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `members`                                                                | [models.GetTeamMembersMembers](../models/getteammembersmembers.md)[]     | :heavy_check_mark:                                                       | N/A                                                                      |
| `emailInviteCodes`                                                       | [models.EmailInviteCodes](../models/emailinvitecodes.md)[]               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.GetTeamMembersPagination](../models/getteammemberspagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |