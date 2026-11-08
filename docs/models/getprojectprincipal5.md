# GetProjectPrincipal5

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectPrincipal5 } from "@vercel/sdk/models/getprojectfrom2.js";

let value: GetProjectPrincipal5 = {
  type: "system",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"system"*         | :heavy_check_mark: | N/A                |