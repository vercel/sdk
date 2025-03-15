# ThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFour } from "@vercel/sdk/models/userevent.js";

let value: ThirtyFour = {
  gitlabLogin: "<value>",
  gitlabEmail: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabEmail`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabName`       | *string*           | :heavy_minus_sign: | N/A                |