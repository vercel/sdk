# FiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFour } from "@vercel/sdk/models/userevent.js";

let value: FiftyFour = {
  domainId: "<id>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domainId`         | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |