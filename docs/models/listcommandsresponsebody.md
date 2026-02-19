# ListCommandsResponseBody

The list of commands executed in the sandbox.

## Example Usage

```typescript
import { ListCommandsResponseBody } from "@vercel/sdk/models/listcommandsop.js";

let value: ListCommandsResponseBody = {
  commands: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `commands`                                             | [models.SandboxCommand](../models/sandboxcommand.md)[] | :heavy_check_mark:                                     | N/A                                                    |