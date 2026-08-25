# CreateConnectorUpdatedBy1

Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.

## Example Usage

```typescript
import { CreateConnectorUpdatedBy1 } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorUpdatedBy1 = {
  type: "user",
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"user"*           | :heavy_check_mark: | Principal kind.    |
| `id`               | *string*           | :heavy_check_mark: | Vercel user ID.    |