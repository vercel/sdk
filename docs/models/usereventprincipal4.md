# UserEventPrincipal4

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { UserEventPrincipal4 } from "@vercel/sdk/models/consent.js";

let value: UserEventPrincipal4 = {
  type: "system",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"system"*         | :heavy_check_mark: | N/A                |