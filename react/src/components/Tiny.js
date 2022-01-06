import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
var arrImg =[]
export default class TinyComponent extends Component {
    state = {
        content: '',
        id: ''
    }

    componentDidUpdate = async() => {
        if ( this.props.id &&(this.state.id ==='' ||  this.state.id !== this.props.id) ) {
            await this.setState({ content: this.props.content, id: this.props.id })
        }
    }

    handleUpload(action) {
        var form = new FormData();
        form.append('id', this.state.id)
        form.append('content', this.state.content)
        form.append('img',arrImg)
        switch (action) {
            case 'create':
                return (
                    this.props.createRequest({ form: form }),
                    this.setState({ content: '' }), 
                    arrImg = []
                )
            case 'update':
                return (
                    console.log(this.state.id,'id'),
                    this.props.updateRequest({ form: form }),
                    this.setState({ content: '' })
                )
            default:
                return (
                    console.log('error')
                )
        }
    }

    render() {
        // console.log(this.state.id,'idsss');
        return (
            <div>
                <button type="button" onClick={() => this.handleUpload('create')}>ADD</button>
                <button type="button" onClick={() => this.handleUpload('update')}>UPDATE</button>
                <Editor
                    apiKey={'685y88qo816uxspgitkx9i6a4nmhs1qabzu0brhu0p6oyw4s'}
                    onEditorChange={(content) => this.setState({ content: content })}
                    value={this.state.content}
                    // initialValue={this.props.item.title}
                    init={{
                        height: 500,
                        width: '75%',
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount image'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat |  image help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        images_upload_handler: async function (blobInfo, success, failure) {
                            // console.log(blobInfo.blob())
                            var response;
                            var url = "http://localhost:3001/img"
                            var form = new FormData()
                            form.append("img", blobInfo.blob())
                            try {
                                response = await fetch(url, {
                                    method: 'POST',
                                    body: form
                                })
                                const res = await response.json()
                                success(res.url)
                                arrImg.push(res.url)
                            } catch (error) {
                                failure('Invalid JSON: ' + response)
                                return
                            }
                        }
                    }}
                />
            </div>  
        )
    }
}
