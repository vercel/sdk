# ConnectConnectorCreateResultUpdatedBy1

Principal that most recently mutated the connector. Same shape as {@link createdBy} but tracks the most recent updater, not the original creator. At create time the two fields point at the same principal; they diverge on the first subsequent update.

## Example Usage

```typescript
import { ConnectConnectorCreateResultUpdatedBy1 } from "@vercel/sdk/models/connectconnectorcreateresult.js";

let value: ConnectConnectorCreateResultUpdatedBy1 = {
  id: "<id>",
  type: "user",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Vercel user ID.    |
| `type`             | *"user"*           | :heavy_check_mark: | Principal kind.    |