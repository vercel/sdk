# GetDeploymentsGitUser

Git provider user associated with the commit author email (only set if resolved)

## Example Usage

```typescript
import { GetDeploymentsGitUser } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsGitUser = {
  id: 7915.58,
  login: "Cordie28",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `id`                        | *models.GetDeploymentsId*   | :heavy_check_mark:          | N/A                         |
| `login`                     | *string*                    | :heavy_check_mark:          | Git provider username/login |