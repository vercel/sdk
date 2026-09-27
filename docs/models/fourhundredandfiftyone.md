# FourHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyOne } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndFiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  public: false,
  repositoryName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `public`           | *boolean*          | :heavy_check_mark: | N/A                |
| `repositoryName`   | *string*           | :heavy_check_mark: | N/A                |