# FortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyTwo } from "@vercel/sdk/models/userevent.js";

let value: FortyTwo = {
  alias: "<value>",
  deploymentUrl: "https://proper-corporation.name/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `alias`            | *string*           | :heavy_check_mark: | N/A                |
| `deploymentUrl`    | *string*           | :heavy_check_mark: | N/A                |