interface ISettings {
    height: number,
    width: number,
    handleSize(e: React.ChangeEvent<HTMLInputElement>, key: string): void
}
export default ISettings;