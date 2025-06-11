# GetProjectMembersResponseBody2

Paginated list of members for the project.

## Example Usage

```typescript
import { GetProjectMembersResponseBody2 } from "@vercel/sdk/models/getprojectmembersop.js";

let value: GetProjectMembersResponseBody2 = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `members`                                                                                              | [models.ResponseBodyMembers](../models/responsebodymembers.md)[]                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [models.GetProjectMembersResponseBodyPagination](../models/getprojectmembersresponsebodypagination.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |