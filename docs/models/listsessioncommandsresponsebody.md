# ListSessionCommandsResponseBody

The list of commands executed in the session.

## Example Usage

```typescript
import { ListSessionCommandsResponseBody } from "@vercel/sdk/models/listsessioncommandsop.js";

let value: ListSessionCommandsResponseBody = {
  commands: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `commands`                                             | [models.SessionCommand](../models/sessioncommand.md)[] | :heavy_check_mark:                                     | N/A                                                    |